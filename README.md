Restaurant Menu Web Application

Description: This repository contains a simple restaurant menu web application developed using React.js for the front-end and Django for the back-end. The application allows users to view a list of menu items, with details such as name and price.

Frontend

Technology: React.js
Features:
Displays a list of menu items with their names and prices.
Utilizes components for structured and reusable code.
Includes styling with CSS to enhance the visual presentation.
Background image for a more engaging user interface.

Backend

Technology: Django
Features:
Provides API endpoints to fetch menu items for the front-end.
Models are set up to manage menu item data, including attributes like name and price.
Utilizes SQLite as the default database for simplicity.
Setup Instructions
Frontend:

Navigate to the frontend directory.
Run npm install to install dependencies.
Start the development server with npm start.
Backend:

Navigate to the backend directory.
Set up a virtual environment and install Django with pip install Django.
Run Django migrations and start the server with:
bash
Copy code
python manage.py migrate
python manage.py runserver

Bonus

Deployment: The application includes a 3-tier AWS architecture diagram for deployment considerations.
