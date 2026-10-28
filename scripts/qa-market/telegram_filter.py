"""Conservative QA vacancy triage for Telegram post text.

Only `included` posts should be published automatically. `review` posts need a
human decision; source text and URL must be retained by the channel adapter.
"""
import re

ROLE = re.compile(r'\b(?:qa|aqa|sdet|tester|testor|testchi)\b|quality\s+assurance|тестировщик|тестировщица|тестировщи[кч]|тестиров|testlash\s+(?:muhandis|mutaxassis)|testing\s+engineer', re.I)
HIRING = re.compile(r'vacanc|ваканси|hiring|we.re looking|join our team|ищем|требуется|набираем|ишга|вакансия|vakansi|ishga\s+(?:taklif|qabul|olamiz)|(?:qidiramiz|izlaymiz|kerak)|ish\s+o[‘\x27ʻ’]rni|job\s+opening', re.I)
SOFTWARE = re.compile(r'\b(?:sql|api|postman|selenium|playwright|software|web|frontend|backend|appium|pytest|cypress|jira)\b|автотест|программн|веб|test\s*case|test\s*automation|dasturiy|manual\s+qa|automation\s+qa', re.I)
NONSOFTWARE = re.compile(r'qa\s*/\s*qc|\bfmcg\b|фармацевт|pharma|gmp\s*/|строитель|лаборатор|пищев|производств|construction|civil\s+engineer', re.I)
SEEKING = re.compile(r'ищу\s+(?:работу|стажировку)|looking\s+for\s+(?:a\s+)?(?:job|work)|open\s+to\s+work|ish\s+(?:qidiryapman|izlayapman|qidiraman)|#(?:resume|cv)\b', re.I)
PROMOTION = re.compile(r'\bkurs\w*|курс|webinar|vebinar|master.?klass|bootcamp|training|o[‘\x27ʻ’]quv', re.I)
CANDIDATE_DETAILS = re.compile(r'maosh|oylik|salary|зарплат|требован|talab|requirements|отклик|apply|резюме\s+(?:юбор|отправ)|cv\s+(?:yubor|send)', re.I)


def classify_post(text):
    """Return a decision and readable reason, without asserting authenticity."""
    text = re.sub(r'\s+', ' ', text or '').strip()
    if not ROLE.search(text):
        return {'classification':'excluded','reason':'QA roli aniqlanmadi'}
    if SEEKING.search(text):
        return {'classification':'review' if HIRING.search(text) else 'excluded','reason':'Ish qidirayotgan nomzod posti bo‘lishi mumkin'}
    if NONSOFTWARE.search(text):
        return {'classification':'review' if SOFTWARE.search(text) else 'excluded','reason':'Software QA bilan boshqa soha aralashgan yoki boshqa soha'}
    if PROMOTION.search(text) and not (HIRING.search(text) and CANDIDATE_DETAILS.search(text)):
        return {'classification':'review' if HIRING.search(text) else 'excluded','reason':'Kurs yoki tadbir reklamasi bo‘lishi mumkin'}
    if HIRING.search(text) and CANDIDATE_DETAILS.search(text):
        return {'classification':'included','reason':'QA roli va ishga qabul qilish dalillari bor'}
    return {'classification':'review','reason':'QA eslatilgan, lekin vakansiya ekaniga dalil yetarli emas'}
