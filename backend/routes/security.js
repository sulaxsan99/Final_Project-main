const securitySchema = require('../models/security');
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();

const ContactDetails = require('../models/contactDetailsSchema');

// Route for changing the admin's email and password
router.post('/change-password', async (req, res) => {
    const email = req.body.Email;
    const currentPassword = req.body.currentPassword;
    const newPassword = req.body.newPassword
    try {
        // Find the admin user by email and isAdmin
        const admin = await securitySchema.findOne({ email });

        if (!admin) {
            return res.status(401).json('Admin not found');
        }

        // Check if the current password is correct
        const isPasswordValid = bcrypt.compare(currentPassword, admin.password);


        if (!isPasswordValid) {
            return res.status(401).json('Incorrect current password');
        }

        // Update the password with the new password
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        admin.password = hashedNewPassword;
         admin.save();

        return res.status(200).json('PasswordChanged');
    } catch (error) {
        console.error(error);
        return res.status(500).json('Error occurred while changing the password');
    }
});
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

  router.post('/update-contact-details',  async (req, res) => {
    try {
        // Extract the new contact details from the request body
        const { newPhoneNumber, newEmail } = req.body;

        const contactDetails = new ContactDetails({
          newPhoneNumber,
          newEmail,
        });
        await contactDetails.save();
        
        return res.status(200).json('Contact details updated successfully');
      } catch (error) {
          console.error(error);
          return res.status(500).json('Error updating contact details');
      }
  });


module.exports = router;
