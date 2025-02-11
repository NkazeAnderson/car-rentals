# Car Rentals Website

#### By Ayamooh

Welcome to a fast and light weight car rentals wensite by Ayamooh company.

## Structure

The app is within a mono repo with 3 packages

- Backend
- Frontend
- Common

### Backend

#### Environment variables

ENV=DEV | PROD _Develepement or Production_
MONGODBURL=mongodb://localhost:27017/ _Mongo Db Connection String_
ADMINCODE=1234 _Super Secret Password to sign auth cookies and login_
PORT=3000 _Port to run the backend on_

### Common

The common has general code useb by both from and backend.
You will need to config the sites contact info, backend and frontend URL in the src/constants file

### Frontend

Already configured

## Commands

_npm run start:dev_: Use this to start the development server
_npm run createAdmin_: Use this to create an admin account after hosting the backend.
