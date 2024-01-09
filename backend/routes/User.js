const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const { decodeToken,
  generateToken,
  hashPassword,
  validateToken,
  validPassword, } = require('../helper')
const UserSchema = require('../models/User')
const Booking = require('../models/Booking')
const multer = require('multer'); // For handling file uploads





router.post("/register", async (req, res) => {
  try {
    console.log(req.body)
    const secData = await UserSchema.findOne({ email: req.body.email });

    if (secData) {
      return res.status(400).json("email already exists");
    }
    const hashPwd = await hashPassword(req.body.password);
    console.log(hashPassword)
    const postData = await new UserSchema({
      firstName: req.body.firstName,
      nic: req.body.nic,
      lastName: req.body.lastName,
      email: req.body.email,
      // jobtype:req.body.jobtype,
      mobilenumber: req.body.mobilenumber,
      // Address:req.body.Address,
      // Staffid:req.body.Staffid,
      password: hashPwd,
    });
    const postUser = await postData.save();
    if (postUser) {
      return res.status(200).json("Registered successfully");
    }
  } catch (err) {
    // console.log(err)
    if (err.code === 0) {
      return res.status(400).json([err, "duplicate key found"]);
    } if (err.code === 11000) {
      return res.status(400).json(err);

    }
    return res.status(400).json(err);
  }
});


router.post("/login", async (req, res) => {
  try {
    const validData = await UserSchema.findOne({ email: req.body.email }).select('+password');
    if (!validData) {
      return res.status(400).json("Invalid email");
    }
    //   console.log(validData.password)
    const validPass = await bcrypt.compare(req.body.password, validData.password);

    if (validPass) {
      const userToken = await generateToken(validData);
      res.header(process.env.TOKEN_KEY, userToken).json({ message: "Login successfully", token: userToken });
    } else {
      return res.status(400).json("Invalid password");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/detail", validateToken, async (req, res) => {
  try {
    const uid = decodeToken(req.headers.loginToken)?._id;
    const user = await UserSchema.findOne({ _id: uid })
      .select("-password")
      .exec();

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/one/:email", async (req, res) => {
  try {
    const User = await UserSchema.findOne({ email: req.params.email })
    if (!User) {
      return res.status(200).json("no user data available")

    } else {
      return res.status(200).json({ User })

    }
  } catch (error) {
    return res.status(400).json(error)
  }
})

router.post("/resetPassword", async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    const user = await UserSchema.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const hashedPassword = await hashPassword(newPassword);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});



router.get("/bookDate", async (req, res) => {
  try {
    const { date } = req.query; // Assuming userEmail is included in the request
    const date1 = req.query.date
    console.log(date1)
    const isDateBooked = await Booking.findOne({ date: date1 });
    console.log("date is ", isDateBooked)
    if (isDateBooked) {
      return res.status(400).json({ message: "Date is not Available, Select Another one " });
    } else {
      return res.status(200).json({ message: "Date is Available" });
    }

  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal server error");
  }
});

// const storage = multer.memoryStorage(); // Store the file in memory as Buffer
// const upload = multer({ storage: storage, limits: { fileSize: 50 * 1024 * 1024 * 1024 } });

//save date with hall design
router.post("/saveDate", async (req, res) => {
  // console.log(req.body.image)
  const io = req.io;

  try {
    const newBooking = new Booking({
      date: req.body.bookingDate,
      user: req.body.user, // Storing the user's email
      filename: req.body.imageName,
      image: req.body.image
    });

    await newBooking.save();
    io.emit('newBooking', { message: `${req.body.user} added hall design`});
    res.status(200).json({ message: 'Booking created with image successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal server error");
  }
});
router.get('/images', async (req, res) => {
  try {
    const images = await Booking.find();
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/images/img/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    const images = await Booking.findOne({ user: req.params.id });
    res.json(images.image);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.delete('/:id',async(req,res)=>{
try {
  const deleteBooking= await Booking.findById(req.params.id);
  if(!deleteBooking) {
      return res.status(200).json("Booking not found")
  }

  const dvis= await Booking.findByIdAndDelete(req.params.id)
  res.status(200).json({ message:"Booking delete successfully", dvis});
  
} catch (error) {
  res.status(400).json({ error: 'Booking not deleted ' });

}
})

// router.get('/')
module.exports = router;
