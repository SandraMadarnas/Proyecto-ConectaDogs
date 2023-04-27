from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "User"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), unique=False, nullable=False)
    is_active = db.Column(db.Boolean, unique=False, nullable=False)
    name = db.Column(db.String(30), unique=False, nullable=False)
    last_name = db.Column(db.String(60), unique=False, nullable=False)
    address = db.Column(db.String(150), unique=False, nullable=False)
    city = db.Column(db.String(35), unique=False, nullable=False)
    postal_code = db.Column(db.Integer, unique=False, nullable=False)
    phone = db.Column(db.Integer, unique=False, nullable=False)
    # country = db.Column(db.String(50), unique=False, nullable=False)
    # birthdate = db.Column(db.Date, unique=False, nullable=False)
    # photo = db.Column(db.String(500), unique=True, nullable=True)     # USAR API CLOUDINARY, HACER LLAMADA Y GAURDARSE LA URL DEVUELTA QUE ES LO QUE SE SUBE A LA BASE DE DATOS


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "address": self.address,
            "city": self.city,
            "postal_code": self.postal_code,
            "phone": self.phone,
            # "country": self.country,
            # "birthday": self.birthday,
            # "photo": self.photo,
        # ¡¡¡¡DO NOT serialize the password, its a security breach!!!
        }


class Dog(db.Model):
    __tablename__ = "Dog"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(35), unique=False, nullable=False)
    breed = db.Column(db.String(50), unique=False, nullable=False)
    birthdate = db.Column(db.Date, unique=False, nullable=False)
    sex = db.Column(db.String(20), unique=False, nullable=False)
    dog_size = db.Column(db.String(20), unique=False, nullable=True)
    sterilized = db.Column(db.Boolean, unique=False, nullable=False)
    social_cats = db.Column(db.Boolean, unique=False, nullable=False)
    social_kids = db.Column(db.Boolean, unique=False, nullable=False)
    social_dogs = db.Column(db.Boolean, unique=False, nullable=False)
    microchip = db.Column(db.Integer, unique=True, nullable=False)
    activity_level = db.Column(db.String(20), unique=False, nullable=True)
    observations = db.Column(db.String(500), unique=False, nullable=True)
#     photo = db.Column(db.String(500), unique=True, nullable=True)         # USAR API CLOUDINARY, HACER LLAMADA Y GAURDARSE LA URL DEVUELTA QUE ES LO QUE SE SUBE A LA BASE DE DATOS

    user_id = Column(db.Integer, ForeignKey("User.id"))

    def __repr__(self):
        return f'<Dog {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "breed": self.breed,
            "birthdate": self.birthdate,
            "sex": self.sex,
            "dog_size": self.dog_size,    
            "sterilized": self.sterilized,
            "social_cats": self.social_cats,
            "social_kids": self.social_kids,
            "social_dogs": self.social_dogs,
            "microchip": self.microchip,
            "activity_level": self.activity_level,
            "observations": self.observations,
            # "photo": self.photo,
        }


class Services(db.Model):
    __tablename__ = "Services"                                # id = 1 PARA nurseryDay        id = 2 PARA walk        id = 3 PARA nurseryNight
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(350), unique=True, nullable=False)
    title = db.Column(db.String(35), unique=True, nullable=False)
    description = db.Column(db.String(500), unique=True, nullable=False)

    user_id = db.Column(db.Integer, ForeignKey("User.id"))

    tarif = relationship("Tarifs", back_populates="service")


    def __repr__(self):
        return f'<Services {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "image": self.image,
            "title": self.title,
            "description": self.description,
            "user_id": self.user_id,
        }


class Tarifs(db.Model):
    __tablename__ = "Tarifs"
    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Integer, unique=False, nullable=False)

    user_id = db.Column(db.Integer, ForeignKey("User.id"))
    services_id = db.Column(db.Integer, ForeignKey("Services.id"))

    service = relationship("Services", back_populates="tarif")


    def __repr__(self):
        return f'<Tarifas {self.price}>'

    def serialize(self):
        return {
            "id": self.id,
            "price": self.price,
            "user_id": self.user_id,
            "services_id": self.services_id,
        }








#     daily_food_rations = db.Column(db.String, unique=False, nullable=False)
#     meal_times = db.Column(db.String, unique=False, nullable=False)
#     schedule_walks = db.Column(db.String, unique=False, nullable=False)
#     caretaker_comments = db.Column(db.String, unique=False, nullable=False)
