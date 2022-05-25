# Deploy Model

## React + Flask

Di sini ada dua komponen penting yaitu frontend (React) dan backend (Flask).Untuk Flask, saya mencopy folder dari final project 01

### Flask POV

Di sini merupakan sudut pandang dari flask. Se

## Deploy to Heroku

1. Pertama login dulu, ini hanya sekali saja
2. ketik heroku create nama-model
3. Buat file requirements.txt yg berisi bahan untuk diinstall
4. procfile, ini ketik aja web:gunicorn app:app
5. Set remote dengan heroku git:remote -a nama-model
6. git push heroku master atau git push heroku main

## Menjalankan flask

export FLASK_APP=app
export FLASK_ENV=development
flask run
