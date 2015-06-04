from flask import Flask, render_template, abort, request, jsonify, g
import sqlite3

app = Flask(__name__)
DATABASE = 'rafadb'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = connect_db()
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def connect_db():
    return sqlite3.connect(DATABASE)


@app.route('/')
def home_page():
    return render_template('index.html')

@app.route('/versus/<opponent>')
def find_crimes(opponent):
	c = get_db().cursor()
	features = {}
	features['r_aces'] = 0
	features['r_df'] = 0
	features['r_svpt'] = 0
	features['r_1stIn'] = 0
	features['r_1stWon'] = 0
	features['r_2ndWon'] = 0
	features['o_aces'] = 0
	features['o_df'] = 0
	features['o_svpt'] = 0
	features['o_1stIn'] = 0
	features['o_1stWon'] = 0
	features['o_2ndWon'] = 0
	
	for row in c.execute('SELECT w_ace, w_df, w_svpt, w_1stIn, w_1stWon, w_2ndWon, l_ace, l_df, l_svpt, l_1stIn, l_1stWon, l_2ndWon FROM matches where ( loser_name == ? )', [opponent]):
		features['r_aces'] = features['r_aces'] + int(row[0])
		features['r_df'] = features['r_df'] + int(row[1])
		features['r_svpt'] = features['r_svpt'] + int(row[2])
		features['r_1stIn'] = features['r_1stIn'] + int(row[3])
		features['r_1stWon'] = features['r_1stWon'] + int(row[4])
		features['r_2ndWon'] = features['r_2ndWon'] + int(row[5])

		features['o_aces'] = features['o_aces'] + int(row[6])
		features['o_df'] = features['o_df'] + int(row[7])
		features['o_svpt'] = features['o_svpt'] + int(row[8])
		features['o_1stIn'] = features['o_1stIn'] + int(row[9])
		features['o_1stWon'] = features['o_1stWon'] + int(row[10])
		features['o_2ndWon'] = features['o_2ndWon'] + int(row[11])

	for row in c.execute('SELECT w_ace, w_df, w_svpt, w_1stIn, w_1stWon, w_2ndWon, l_ace, l_df, l_svpt, l_1stIn, l_1stWon, l_2ndWon FROM matches where ( winner_name == ? )', [opponent]):
		features['o_aces'] = features['o_aces'] + int(row[0])
		features['o_df'] = features['o_df'] + int(row[1])
		features['o_svpt'] = features['o_svpt'] + int(row[2])
		features['o_1stIn'] = features['o_1stIn'] + int(row[3])
		features['o_1stWon'] = features['o_1stWon'] + int(row[4])
		features['o_2ndWon'] = features['o_2ndWon'] + int(row[5])

		features['r_aces'] = features['r_aces'] + int(row[6])
		features['r_df'] = features['r_df'] + int(row[7])
		features['r_svpt'] = features['r_svpt'] + int(row[8])
		features['r_1stIn'] = features['r_1stIn'] + int(row[9])
		features['r_1stWon'] = features['r_1stWon'] + int(row[10])
		features['r_2ndWon'] = features['r_2ndWon'] + int(row[11])

		

	return jsonify(features)
	

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug='True')