In order to run this app, you need to export he correct environment variables

  export FLASK_CONFIG=production
  export FLASK_APP=run.py


   export SQLALCHEMY_DATABASE_URI='mysql://your-username:your-password@your-host-address/your-database-name'


   flask db upgrade


Admin User
We will now create an admin user the same way we did locally. Open the Bash console, and run the following commands:

$ flask shell
>>> from app.models import Employee
>>> from app import db
>>> admin = Employee(email="admin@admin.com",username="admin",password="admin2016",is_admin=True)
>>> db.session.add(admin)
>>> db.session.commit()


mkvirtualenv -p /usr/bin/python2.7 dream-team
