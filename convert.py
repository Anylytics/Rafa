import csv
with open('./static/data/data.csv', 'rb') as csvfile:
	reader = csv.reader(csvfile, delimiter=',')
	for row in reader:
		name = row[0]
		lat = row[1]
		lng = row[2]
		lng = lng[1:]
		if lng[-1] == 'W':
			lng = '-'+lng
		if lat[-1] == 'S':
			lat = '-'+lat
		lat = lat[0:-4]
		lng = lng[0:-4]
		print name+','+lat+','+lng

