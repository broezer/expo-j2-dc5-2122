from csv import reader
# open file in read mode
with open('jaar1.csv', 'r') as read_obj:
    # pass the file object to reader() to get the reader object
    csv_reader = reader(read_obj)
    # Iterate over each row in the csv using reader object
    for row in csv_reader:
        # row variable is a list that represents a row in csv
        name = row[0].split(';')
        if name[1]:
            fileName = name[0].lower() + '-' + name[1].lower()+ '-'  + name[2].lower()
        else: 
            fileName = name[0].lower() + '-' + name[2].lower()
        f = open(str(fileName) + '.md', 'w')
        f.write("--- " + '\n')
        f.write("firstname: " + name[0] + '\n')
        if name[1]:
            f.write("lastname: " + name[1] + " " + name[2] + '\n')
        else: 
            f.write("lastname: " + name[2] + '\n') 
        f.write("video: "  + '\n')
        f.write("--- " + '\n')
        f.close()
