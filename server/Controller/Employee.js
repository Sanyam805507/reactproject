import EmployeeModel from "../models/Employee"

export const CreateEmployee = async(req,res)=>{
    try {
        const empData=await EmployeeModel.create({
            name :req.body.name,
            address:req.body.address,
            salary:req.body.salary,
        });
        if (empData)res.status(201).send({message:"Employee Created !!!!"});
        else res .status(404).send({
            message:"unable to create employee"
        });
    } catch (error) {
        console.log("Fail to submit data");
    }
}
export const UpdateEmployee = async(req,res)=>{
    try {
        const empData=await EmployeeModel.update(
            {_id:req.body.id},
            {
            name :req.body.name,
            address:req.body.address,
            salary:req.body.salary,
        });
        if (empData)res.status(200).send({message:"Employee Updated !!!!"});
        else res .status(404).send({
            message:"unable to update employee"
        });
    } catch (error) {
        console.log("Fail to submit data");
    }
}
export const DeleteEmployee = async(req,res)=>{
    try {
        const empData=await EmployeeModel.deleteOne(
            {_id:req.body.id},
           );
        if (empData.deletedCount()==1)res.status(200).send({message:"Employee deleted !!!!"});
        else res .status(404).send({
            message:"unable to delete employee"
        });
    } catch (error) {
        console.log("Fail to submit data");
    }
}