const User =require("../models/user");
 
async function handleGetAllUsers(req,res){
    const allUsers=await User.find({});
    return res.json(allUsers);  
}

async function handleGetUserById(req,res){
    try {
        const user = await User.findById(req.params.id).lean();
        if (!user) return res.status(404).json({ msg: "User not found" });
        return res.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({ error: "Failed to fetch user" });
    }
}

async function handleUpdateUserById(req,res){
    const updateUser=await User.findByIdAndUpdate(req.params.id,{last_name :" eneni"});
    return res.json({mssg:"successfully updated"});

} 

async function handleDeleteById(req,res){
    const deleteuser=await User.findByIdAndDelete(req.params.id);
    return res.json({msg :"user deleted"});

}

async function handleCreateUserId(req,res){

    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.jobTitle
    ) {
        return res.status(400).json({ msg: "All fields are required" });
    }
    try {
        const result = await User.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            gender: body.gender,
            jobTitle: body.jobTitle
        });
        console.log("result", result);
        return res.status(201).json({ msg: "User created successfully" });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Failed to create user" });
    }

}

module.exports={
    handleGetAllUsers,handleGetUserById,handleUpdateUserById,handleDeleteById,handleCreateUserId,
}
