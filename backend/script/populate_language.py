from translator.models import AvailableLanguage
def main():
    l = """auto - Auto
    ar - Arabic
bn - Bengali
de - German
en - English
es - Spanish
fr - French
hi - Hindi
id - Indonesian
it - Italian
ja - Japanese
ko - Korean
pt - Portuguese
ru - Russian
tr - Turkish
zh - Chinese"""

    l = l.split("\n")

    for lang in l:
        print(lang)
        value = lang.strip().split(" - ")[0]
        language_name = lang.split(" - ")[1]
        # print(value + ' ' + language_name)
        AvailableLanguage.objects.create(value=value, language_name=language_name, )

if __name__ == '__main__':
    main()
    print('Languages populated successfully')