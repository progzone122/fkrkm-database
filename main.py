import eel, csv
print("Завантаження... Будь ласка, зачекайте...")
@eel.expose
def loadDatabase():
    db_arr = {}
    try:
        with open('database.csv', 'r') as database:
            reader = csv.reader(database)
            i = 0
            for row in reader:
                db_arr[i] = row[0].split(";")
                i = i + 1
            eel.readDatabase(db_arr)
    except:
        open("database.csv", "a").close()
        eel.readDatabase("")
        print("[?] Помилка автоматично усунена!")
@eel.expose
def addEntry(lastname, firstname, surname, date, phone, email, speciality, year_of_entry, group):
    with open('database.csv', 'a+', newline="") as database:
        writer = csv.writer(database, delimiter=";")
        writer.writerow([ lastname, firstname, surname, date, phone, email, speciality, year_of_entry , group ])
@eel.expose
def removeEntry(response):
    database2 = open("database.csv", "w")
    database2.write("")
    database2.close()
    with open('database.csv', 'a+', newline="") as database:
        writer = csv.writer(database, delimiter=";")
        for i in response:
            writer.writerow([ response[i][0], response[i][1], response[i][2], response[i][3], response[i][4], response[i][5], response[i][6], response[i][7], response[i][8] ])


if __name__ == '__main__':
    eel.init('www') # Ініциалізуємо директорію з GUI
    eel.start('index.html', mode="chrome") # Ініциалізуємо вхідну точку програми та через який eel mode запускати програму, потім запускаємо