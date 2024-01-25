import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import HttpError from '../../modules/errorModel.js';
import { auth_Validation_Shema } from "../../helpers/Validation_Shema.js";
import Auth_Shema from '../../modules/Auth_Shema.js';

// register
export const AuthRegister = async (req, res, next) => {
    // const { userName, email, password } = req.body;
    try {
        const validatenames = { userName: req.body.userName, email: req.body.email }
        const result = await auth_Validation_Shema.validateAsync(validatenames);
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hashSync(req.body.password, salt);
        const response = await Auth_Shema({
            userName: result?.userName,
            email: result?.email,
            password: hashPassword,
            avatar: "",
            avatarstatus: false
        });
        await response.save();
        res.status(201).json({ message: "User Register Successfully", user: response });
    } catch (error) {
        return next(new HttpError('User Already Register', 422))
    }
}

// login
export const AuthLogin = async (req, res, next) => {
    const { userNameorEmail, password } = req.body;
    try {
        const existemail = await Auth_Shema.findOne({
            $or: [{
                "email": userNameorEmail
            }, {
                "userName": userNameorEmail
            }]
        });
        if (existemail) {
            const hashPassword = await bcrypt.compare(password, existemail.password);
            if (hashPassword) {
                const token = await jwt.sign({ id: existemail?._id?.toString(), expireIn: "2d" }, process.env.TOKENID);
                res.status(200).json({ message: "User Login Successfully", user: existemail, token });
            }
            else {
                res.status(404).json({ message: "Wrong Password" });

            }
        }
        else {
            res.status(404).json({ message: "User dosn't Exist", });
        }

    } catch (error) {
        res.status(404).json({ message: "User Not Found", });
    }
}

// single user
export const GetSingleUserData = async (req, res, next) => {
    const id = req.params.id;
    try {
        if (id) {
            const response = await Auth_Shema.findById({ _id: id });
            if (response) {
                await res.status(200).json({ message: "success", data: response });
            }
            else {
                await res.status(404).json({ message: "User Id Not Found", });
            }
        }

    } catch (error) {
        res.status(404).json({ message: "User Id Not Found", });
    }
}

// single user update
export const SingleUserUpdate = async (req, res, next) => {
    try {

        const olduser = await Auth_Shema.findById({ _id: req.userid })
        if (req.body.password) {
            const oldPassword = await bcrypt.compare(req.body.oldpassword, olduser?.password);
            if (oldPassword) {
                const salt = await bcrypt.genSalt(10);
                const comparepassword = await bcrypt.hashSync(req.body.password, salt)
                const response = await Auth_Shema.findByIdAndUpdate({ _id: req.userid }, { password: comparepassword }, { new: true });
                if (response) { res.status(200).json({ message: "Updated Password successfully" }); }

            }
            else {
                res.status(404).json({ message: "Old Password Dosn't Matched" });
            }

        }
        else {
            const response = await Auth_Shema.findByIdAndUpdate({ _id: req.userid }, req.body, { new: true });
            if (response) { res.status(200).json({ message: "Updated successfully" }); }
            else {
                res.status(404).json({ message: "User Id Not Found", });
            }
        }

    } catch (error) {
        res.status(404).json({ message: "User Id Not Found", });
    }
}
// all users
export const AllUsers = async (req, res, next) => {
    try {
        const response = await Auth_Shema.find({ _id: { $ne: req.userid } });
        if (response) res.status(200).json({ message: "All Users", data: response });

    } catch (error) {
        res.status(404).json({ message: error });

    }
}

// forget password

export const forgetpassword = async (req, res, next) => {
    const { email } = req.body;
    try {
        const userCheck = await Auth_Shema.findOne({
            $or: [{
                "email": email
            }, {
                "userName": email
            }]
        });
        if (userCheck) {
            res.status(200).json({ message: "foregtpassword", userid: userCheck?._id });
        }
        else {
            res.status(404).json({ message: "Email is Incoorcet" });

        }
    } catch (error) {
        res.status(404).json({ message: error });

    }
}

// PASSWORD update

export const passwordChange = async (req, res, next) => {
    const id = req.params.id;
    try {
        const salt = await bcrypt.genSalt(10);
        const comparepassword = await bcrypt.hashSync(req.body.password, salt)
        const response = await Auth_Shema.findByIdAndUpdate({ _id: id }, { password: comparepassword }, { new: true });
        if (response) { res.status(200).json({ message: "Passowrd Changed successfully" }); }
    } catch (error) {
        res.status(404).json({ message: "User Id Not Found", });
    }
}



