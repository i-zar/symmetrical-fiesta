from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/game-results')
def game_results():
    data = [
        {'id': 1, 'team': 'Team A', 'question': 'Q1', 'result': 'Correct'},
        {'id': 2, 'team': 'Team A', 'question': 'Q2', 'result': 'Incorrect'},
        {'id': 3, 'team': 'Team B', 'question': 'Q1', 'result': 'Correct'},
        {'id': 4, 'team': 'Team B', 'question': 'Q2', 'result': 'Correct'},
    ]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
