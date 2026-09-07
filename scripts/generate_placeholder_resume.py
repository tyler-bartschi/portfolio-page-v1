from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import LETTER
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


OUTPUT = Path(__file__).resolve().parents[1] / "public" / "resume-placeholder.pdf"
INK = HexColor("#101820")
TEAL = HexColor("#087f78")
MUTED = HexColor("#51616b")
PAPER = HexColor("#fbfaf5")


def draw_rule(pdf: canvas.Canvas, y: float) -> None:
    pdf.setStrokeColor(HexColor("#cfd8d5"))
    pdf.setLineWidth(0.75)
    pdf.line(56, y, 556, y)


def fit_text(pdf: canvas.Canvas, text: str, x: float, y: float, max_width: float) -> None:
    words = text.split()
    line = ""
    lines: list[str] = []
    for word in words:
        candidate = f"{line} {word}".strip()
        if stringWidth(candidate, "Helvetica", 9.5) <= max_width:
            line = candidate
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    for offset, current_line in enumerate(lines):
        pdf.drawString(x, y - offset * 13, current_line)


def main() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(OUTPUT), pagesize=LETTER, pageCompression=1)
    pdf.setTitle("Student Name - Placeholder Resume")
    pdf.setAuthor("Student Name")
    pdf.setSubject("Presentation placeholder resume for the portfolio site")
    width, height = LETTER
    pdf.setFillColor(PAPER)
    pdf.rect(0, 0, width, height, stroke=0, fill=1)

    pdf.setFillColor(TEAL)
    pdf.rect(0, height - 16, width, 16, stroke=0, fill=1)
    pdf.setFillColor(INK)
    pdf.setFont("Helvetica-Bold", 26)
    pdf.drawString(56, height - 68, "STUDENT NAME")
    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica", 10)
    pdf.drawString(56, height - 88, "student@example.com  |  github.com/username  |  linkedin.com/in/username")
    pdf.setFillColor(TEAL)
    pdf.setFont("Helvetica-Bold", 8)
    pdf.drawRightString(556, height - 67, "PLACEHOLDER RESUME")
    draw_rule(pdf, height - 106)

    sections = [
        ("EDUCATION", "Example University - B.S. Computer Science", "Expected May 2027 | GPA: replace with verified GPA"),
        ("EXPERIENCE", "Software Engineering Intern - Example Technology Company", "Replace these lines with concise, measurable accomplishments from your verified experience."),
        ("PROJECTS", "Project Atlas - React, TypeScript", "Replace with a project outcome, your engineering contribution, and evidence of impact."),
        ("SKILLS", "Languages: TypeScript, Python, Java, SQL", "Tools: React, Git, AWS, Linux | Foundations: algorithms, data structures, testing"),
    ]

    y = height - 144
    for heading, title, detail in sections:
        pdf.setFillColor(TEAL)
        pdf.setFont("Helvetica-Bold", 9)
        pdf.drawString(56, y, heading)
        y -= 24
        pdf.setFillColor(INK)
        pdf.setFont("Helvetica-Bold", 11)
        pdf.drawString(56, y, title)
        y -= 18
        pdf.setFillColor(MUTED)
        pdf.setFont("Helvetica", 9.5)
        fit_text(pdf, detail, 56, y, 500)
        y -= 48
        draw_rule(pdf, y + 16)

    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica-Oblique", 8)
    pdf.drawString(56, 38, "Presentation placeholder only - replace this PDF with your verified resume before publishing.")
    pdf.save()


if __name__ == "__main__":
    main()
