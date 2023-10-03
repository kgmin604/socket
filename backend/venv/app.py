from flask import Flask, render_template, session, request, jsonify
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins=['http://localhost:3000'], manage_session=False)

lst = []

@socketio.on('connect')
def test_connect():
    print("========CONNECT========")
    lst.append(lst)
    print(lst)
    
@socketio.on('enter')
def test_connect2(data):
    print("========ENTER:========")
    print(data)

if __name__ == '__main__':
    socketio.run(app)