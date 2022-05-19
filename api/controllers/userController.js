import User from '../models/User.js'
// export const createUser= async (req, res, next)=> {
//     const newUser = new User(req.body)
//     try{
//         const savedUser = await newUser.save();
//         res.status(200).json(savedUser)
//     }
//     catch(error){
//         next(err)
//     }
// }
export const updateUser = async(req, res) => {
    // const updatedUser = new User(req.body)
    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updatedUser)
    }
    catch(error){
        next(err);
    }
}
export const deleteUser = async(req, res) => {
    // const updatedUser = new User(req.body)
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User Deleted");
    }
    catch(error){
        next(err);
    }
}
export const getUser =  async(req, res, next) => {
    // const updatedUser = new User(req.body)

    try{
        const getUser = await User.findById(req.params.id);
        res.status(200).json(getUser);
    }
    catch(error){
        next(err)
    }
}
export const getAllUsers = async(req, res, next) => {
    try{
        const getUsers = await User.find();
        res.status(200).json(getUsers);
    }
    catch(error){
        next(err);
    } 
}