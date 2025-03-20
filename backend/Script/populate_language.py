from translator.models import AvailableLanguage
def main():
    l = """ar - Arabic
bn - Bengali
cs - Czech
da - Danish
de - German
el - Greek
en - English
es - Spanish
fa - Persian
fi - Finnish
fr - French
hi - Hindi
he - Hebrew
id - Indonesian
it - Italian
ja - Japanese
ko - Korean
ku - Kurdish
la - Latin
ne - Nepali
nl - Dutch
no - Norwegian
pl - Polish
pt - Portuguese
ro - Romanian
ru - Russian
sv - Swedish
tr - Turkish
uk - Ukrainian
ur - Urdu
vi - Vietnamese
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