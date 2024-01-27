import Questions from "../models/questionSchema.js"
import Results from "../models/resultSchema.js"
import questions,{answers} from '../database/data.js'


export async function getQuestions(req,res){
    // res.json("controller question api get request")
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json("jjij")
        res.json({error})
    }
}
// try {
        
// } catch (error) {
//     res.json({error})
// }
export async function insertQuestions(req, res) {
    try {
        await Questions.insertMany({ questions, answers });
        res.json({ msg: "Data saved successfully..!" });
    } catch (error) {
        res.json({ error });
    }
}


export async function dropQuestions(req,res){
    // res.json("question api delete request")
        try {
            await Questions.deleteMany();
            res.json({msg : "deleted all suceesfully..."})
        } catch (error) {
            res.json({error})
        }
}

export async function getResult(req,res){
    // res.json("result api get request")
        try {
                const r= await Results.find()
                res.json(r)
        } catch (error) {
            res.json({error})
        }
}

export async function storeResult(req, res){
    try {
         const { username, result, attempts, points, achived } = req.body;
         if(!username && !result) throw new Error('Data Not Provided...!');
 
         Results.create({ username, result, attempts, points, achived })
        res.json({ msg : "Result Saved Successfully...!"}) 
    } catch (error) {
         res.json({error})
    }
}

export async function dropResult(req,res){
    // res.json("result  api delete request")
        try {
            await Results.deleteMany();
            res.json({msg : "deleted all result suceesfully..."})
        } catch (error) {
            res.json({error})
        }

}