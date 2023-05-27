import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app=express();

app.use(cors());
app.use(express.json());


const db= mysql.createConnection({
    host:"localhost", 
    user: "root",
    password: "",
    database: "crud"
}) 
 

app.get("/",(req,res)=>{
    const sql= "SELECT*FROM student";
    db.query(sql,(err,result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

//for create student
app.post ('/student',(req,res)=>{
    const sql="INSERT INTO student (`Name`,`Email`) VALUES (?)";
    const values=[
        req.body.name,
        req.body.email
    ]
    db.query(sql,[values],(err,result)=>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

//for read student data
app.get("/read/:id",(req,res)=>{
    const sql= "SELECT*FROM student where ID=?";
    const id=req.params.id;
    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

// for update the student data
app.put('/update/:id',(req,res)=>{
    const sql='UPDATE student SET `NAME`=?,`Email`=? WHERE ID=?';
    const id=req.params.id;
    db.query(sql, [req.body.name,req.body.email,id],(err,result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

//for delete
app.delete('/delete/:id',(req,res)=>{
    const sql='DELETE FROM student  WHERE ID=?';
    const id=req.params.id;
    db.query(sql, [id],(err,result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})
app.listen(8080, ()=>{  
    console.log("Listening");
})
