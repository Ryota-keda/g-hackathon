from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/data')
def get_data():
    conn = mysql.connector.connect(
        host='db',
        user='root',
        password='root',
        database='mydatabase'
    )
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM your_table")
    data = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
