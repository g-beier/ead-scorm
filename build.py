#!/usr/bin/env python3
"""Gera os pacotes SCORM (.zip) em dist/ a partir das pastas de projeto do repositório.

Uso (na raiz do repositório):
    python3 build.py

Cada pasta de projeto na raiz que tenha imsmanifest.xml vira dist/<pasta>.zip,
com o manifesto na raiz do zip. Antes de compactar, o script confere:
  - se o imsmanifest.xml é XML válido;
  - se todos os arquivos citados no manifesto existem na pasta.
Se algum projeto falhar, ele não gera zip e o script termina com código de erro.

Ignorados: base/ (kit compartilhado), dist/, .claude/, .git/ e pastas começando com "." ou "_".
"""
import os
import sys
import zipfile
import xml.etree.ElementTree as ET

RAIZ = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(RAIZ, "dist")
IGNORADAS = {"base", "dist", ".claude", ".git"}


def projetos():
    """Pastas de projeto: diretórios da raiz com imsmanifest.xml."""
    for nome in sorted(os.listdir(RAIZ)):
        pasta = os.path.join(RAIZ, nome)
        if nome.startswith((".", "_")) or nome in IGNORADAS or not os.path.isdir(pasta):
            continue
        if os.path.isfile(os.path.join(pasta, "imsmanifest.xml")):
            yield nome, pasta


def verificar(pasta):
    """Devolve a lista de erros do projeto (vazia se estiver tudo certo)."""
    manifesto = os.path.join(pasta, "imsmanifest.xml")
    try:
        arvore = ET.parse(manifesto)
    except ET.ParseError as e:
        return [f"imsmanifest.xml não é XML válido: {e}"]

    erros = []
    refs = set()
    for el in arvore.iter():
        tag = el.tag.split("}")[-1]
        if tag in ("file", "resource") and el.get("href"):
            refs.add(el.get("href"))
    for ref in sorted(refs):
        if not os.path.isfile(os.path.normpath(os.path.join(pasta, ref))):
            erros.append(f"arquivo citado no manifesto não existe: {ref}")
    return erros


def compactar(nome, pasta):
    """Cria dist/<nome>.zip com o conteúdo da pasta, sem arquivos ocultos (ex.: .DS_Store)."""
    destino = os.path.join(DIST, nome + ".zip")
    with zipfile.ZipFile(destino, "w", zipfile.ZIP_DEFLATED) as z:
        for raiz, subpastas, arquivos in os.walk(pasta):
            subpastas[:] = [d for d in subpastas if not d.startswith(".")]
            for arquivo in arquivos:
                if arquivo.startswith("."):
                    continue
                completo = os.path.join(raiz, arquivo)
                z.write(completo, os.path.relpath(completo, pasta).replace(os.sep, "/"))
    with zipfile.ZipFile(destino) as z:
        if "imsmanifest.xml" not in z.namelist():
            raise RuntimeError("o zip não ficou com o imsmanifest.xml na raiz")
    return destino


def main():
    os.makedirs(DIST, exist_ok=True)
    for antigo in os.listdir(DIST):          # remove só os zips gerados antes; a pasta fica
        if antigo.endswith(".zip"):
            os.remove(os.path.join(DIST, antigo))

    lista = list(projetos())
    if not lista:
        print("Nenhum projeto com imsmanifest.xml encontrado na raiz do repositório.")
        return 0

    ok = True
    for nome, pasta in lista:
        erros = verificar(pasta)
        if erros:
            ok = False
            print(f"ERRO {nome}:")
            for e in erros:
                print(f"  - {e}")
            continue
        destino = compactar(nome, pasta)
        print(f"OK   {nome} -> dist/{os.path.basename(destino)}")

    print("Concluído." if ok else "Concluído com erros: os projetos com ERRO não foram gerados.")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
