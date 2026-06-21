from pathlib import Path
from PIL import Image
import subprocess


ROOT = Path(__file__).resolve().parents[1]
PDF_PATH = Path("/Users/beiyanliu/Downloads/53+-+2026B广东+-+一年预测.pdf")
PAGE_DIR = ROOT / "assets" / "pages"
QUESTION_DIR = ROOT / "assets" / "questions"


QUESTIONS = [
    ("q001", 3, (40, 140, 480, 550)),
    ("q002", 3, (40, 550, 480, 970)),
    ("q003", 3, (493, 155, 950, 710)),
    ("q004", 3, (493, 710, 950, 1220)),
    ("q005", 4, (40, 410, 480, 945)),
    ("q006", 4, (493, 220, 950, 780)),
    ("q007", 5, (40, 135, 480, 610)),
    ("q008", 5, (40, 610, 480, 1040)),
    ("q009", 5, (493, 470, 950, 920)),
    ("q010", 6, (40, 255, 480, 815)),
    ("q011", 6, (40, 815, 480, 1390)),
    ("q012", 6, (493, 80, 950, 760)),
    ("q013", 6, (493, 760, 950, 1390)),
    ("q014", 7, (40, 125, 480, 640)),
    ("q015", 7, (40, 640, 480, 1085)),
    ("q016", 7, (493, 515, 950, 990)),
    ("q017", 8, (40, 390, 480, 940)),
    ("q018", 8, (493, 165, 950, 760)),
    ("q019", 9, (40, 135, 480, 625)),
    ("q020", 9, (40, 625, 480, 1260)),
]


def render_pages():
    PAGE_DIR.mkdir(parents=True, exist_ok=True)
    existing = list(PAGE_DIR.glob("page-03.png"))
    if existing:
        return
    subprocess.run(
        [
            "pdftoppm",
            "-f",
            "3",
            "-l",
            "9",
            "-png",
            "-r",
            "130",
            str(PDF_PATH),
            str(PAGE_DIR / "page"),
        ],
        check=True,
    )


def crop_questions():
    QUESTION_DIR.mkdir(parents=True, exist_ok=True)
    for question_id, page, box in QUESTIONS:
        image_path = PAGE_DIR / f"page-{page:02d}.png"
        if not image_path.exists():
            raise FileNotFoundError(image_path)
        image = Image.open(image_path)
        cropped = image.crop(box)
        cropped.save(QUESTION_DIR / f"{question_id}.png")


if __name__ == "__main__":
    render_pages()
    crop_questions()
    print(f"Generated {len(QUESTIONS)} question crops in {QUESTION_DIR}")
