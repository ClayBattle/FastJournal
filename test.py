from datetime import datetime
import klembord
klembord.init()

now = datetime.now()

day = now.date().strftime("%d/%m/%y")
time = now.time().strftime("%I:%M %p")

# Get the day of the week
day_of_week = now.strftime("%A")

journal_string = f'{day_of_week} - {day} - {time}'
klembord.set_with_rich_text('journal_string', f'<b>{journal_string}</b>')
