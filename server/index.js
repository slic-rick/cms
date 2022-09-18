const express = require("express")
const mysql = require("mysql");
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")

// Setting up the bordy-parser for handling requests from client

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// Setting up the port 
const port = process.env.PORT || 5000

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user:'root',
    password:'',
    database:'cms'

});



// Get a all the mebers from db 
app.get("/members",(req,res)=>{
    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('SELECT * from members',(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

// Get a all the baptism from db 
app.get("/baptism",(req,res)=>{
    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('SELECT * from baptism',(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

// Get a all the baptism from db 
app.get("/joinbaptism",(req,res)=>{
    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('SELECT * , members.name, members.surname from baptism INNER JOIN members ON baptism.IdNumber = members.idNumber;',(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});


// Get a all the baptism from db 
app.get("/baptism/:id",(req,res)=>{
    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('SELECT * from baptism WHERE idNumber = ?',[req.params.id],(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

// Get a all the mebers from db 
app.get("/confirmation",(req,res)=>{

    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('SELECT * from confirmation',(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

// Get a single confirmation record from db
app.get("/confirmation/:id",(req,res)=>{

    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('SELECT * from confirmation WHERE idNumber = ?',[req.params.id],(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

// Get all the marriage records from db 
app.get("/marriage",(req,res)=>{

    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('SELECT * from marriage',(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

// Get a all the mebers from db 
app.get("/marriage/:id",(req,res)=>{
    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('SELECT * from marriage WHERE idNumber = ?',[req.params.id],(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

// delete a single event given the id
app.delete("/deletEvent/:id", (req, res) => {
    console.log('In the delete method on the back end')
    const id = req.params.id;

    // console.log(`Printing the received id ${id}`);
    // db.query("DELETE FROM events WHERE eventId = ?", id, (err, result) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     res.send(result);
    //   }
    // });
    
    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('DELETE FROM events WHERE eventId = ?',id,(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })

  });

// Get a all the events from db 
app.get("/events",(req,res)=>{

    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('SELECT * from events',(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

// Get all all the admins 
app.get("/admin",(req,res)=>{

    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('SELECT * from admin',(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

// Get all all the transaction of a given member 
app.get("/payments/:id",(req,res)=>{

    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('SELECT * from payments WHERE idNumber = ?',[req.params.id],(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

// Get all all the admins 
app.get("/churches",(req,res)=>{

    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('SELECT * from churches',(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});


// Get all all the admins 
app.get("/events",(req,res)=>{

    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('SELECT * from events',(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

// sending login data
// creating new registration
app.post("/login",(req,res)=>{

    console.log(`Received data: ${req.body}`);

    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        // const body = req.body;
        const {email,password} = req.body;
        console.log("Printing the received data");
        console.log(password);
        console.log(email);

        connection.query('SELECT * FROM admin WHERE email = ? AND password = ?',[email,password],(err,result)=>{
            connection.release() 

            if(!err){
                if(result === undefined || result.length == 0){
                    console.log("The password or email is wrong");
                    res.send("Please provide the right Password and email address")
                }else{
                    res.send(result)
                }

                
            }else{
                console.log(`Wrong password! ${result}`)
            }
        })

        // console.log(`The body is ${body.name}`);
    })
    
});

// sending login data
// creating new registration
app.post("/memberLogin",(req,res)=>{

    console.log(`Received data in Member Login: ${req.body}`);

    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        // const body = req.body;
        const {idNumber,password} = req.body;
        console.log("Printing the received data");

        console.log(password);
        console.log(idNumber);

        connection.query('SELECT * FROM members WHERE idNumber = ? AND password = ?',[idNumber,password],(err,result)=>{
            connection.release() 
            if(!err){
                if(result === undefined || result.length == 0){
                    console.log("The password or email is wrong");
                    res.send("Please provide the right Password and email address")
                }else{
                    res.send(result)
                }

                
            }else{
                console.log(`Wrong password! ${result}`)
            }
        })

        // console.log(`The body is ${body.name}`);
    })
    
});

app.post("/newAdmin",(req,res)=>{

    console.log("received data in newAdmin")
    console.log(req.body);

    const {idNumber,surname, name,email,password,churchId} = req.body;


    pool.getConnection((err,connection) =>{ 
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('INSERT INTO admin Values(?,?,?,?,?,?)',[idNumber,surname, name,email,password,churchId],(err,result)=>{
            connection.release() 

            if(!err){

                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

app.post("/newMember",(req,res)=>{

    console.log("received data in newMember")
    console.log(req.body);

    // const {idNumber,surname, name,email,password,churchId} = req.body;


    pool.getConnection((err,connection) =>{ 
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('INSERT INTO members SET ? ',[req.body],(err,result)=>{
            connection.release() 

            if(!err){

                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

app.post("/newConfirmation",(req,res)=>{

    console.log("received data in newConfirmation")
    console.log(req.body);

    // const {idNumber,surname, name,email,password,churchId} = req.body;


    pool.getConnection((err,connection) =>{ 
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('INSERT INTO confirmation SET ? ',[req.body],(err,result)=>{
            connection.release() 

            if(!err){

                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

app.post("/newMarriage",(req,res)=>{

    console.log("received data in newMarriage")
    console.log(req.body);

    // const {idNumber,surname, name,email,password,churchId} = req.body;


    pool.getConnection((err,connection) =>{ 
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('INSERT INTO marriage SET ? ',[req.body],(err,result)=>{
            connection.release() 

            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

app.post("/newTransaction",(req,res)=>{

    console.log("received data in newTransaction")
    console.log(req.body);

    // const {idNumber,surname, name,email,password,churchId} = req.body;


    pool.getConnection((err,connection) =>{ 
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('INSERT INTO payments SET ? ',[req.body],(err,result)=>{
            connection.release() 

            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

app.post("/newBaptism",(req,res)=>{

    console.log("received data in newBaptism")
    console.log(req.body);

    // const {idNumber,surname, name,email,password,churchId} = req.body;


    pool.getConnection((err,connection) =>{ 
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('INSERT INTO baptism SET ? ',[req.body],(err,result)=>{
            connection.release() 

            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});


app.post("/newEvent",(req,res)=>{

    console.log("received data in newEvent")
    console.log(req.body);

    // const {idNumber,surname, name,email,password,churchId} = req.body;


    pool.getConnection((err,connection) =>{ 
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        connection.query('INSERT INTO events SET ? ',[req.body],(err,result)=>{
            connection.release() 

            if(!err){
                res.send(result)
            }else{
                console.log(err)
            }
        })


    })
    
});

// for updating the password for the member
app.put("/registerMember",(req,res)=>{

    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        // const body = req.body;
        const {password,idNumber} = req.body;
        // const id = req.body.staff_id

        // console.log(body)
        connection.query('UPDATE members SET password = ? WHERE idNumber =  ?',[password,idNumber],(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
                res.send(err); 
            }
        })

        // console.log(`The body is ${body.name}`);
    })
    
});

// for updating the registration table approve field
app.put("/updateMember/:id",(req,res)=>{

    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        // const body = req.body;
        const {
            name,
            dateOfBirth,
            idNumber,
            placeOfBirth,
            fatherName,
            fatherSurname,
            fatherDOB,
            fatherPlaceOfBirth,
            fatherCountry,
            fatherIdNumber,
            motherSurname,
            motherName,
            motherDOB,
            motherPlaceOfBirth,
            motherCountry,
            motherIdNumber} = req.body;

            console.log("Printing the received data in updateMember")
            console.log(req.body);

        //    [ name,
        //     dateOfBirth,
        //     idNumber,
        //     placeOfBirth,
        //     fatherName,
        //     fatherSurname,
        //     fatherDOB,
        //     fatherPlaceOfBirth,
        //     fatherCountry,
        //     fatherIdNumber,
        //     motherSurname,
        //     motherName,
        //     motherDOB,
        //     motherPlaceOfBirth,
        //     motherCountry,
        //     motherIdNumber]
            
            // "UPDATE members SET name = ?, dateOfBirth = ?, idNumber= ?, placeOfBirth= ?, fatherName = ?, fatherSurname = ?, fatherDOB = ?, fatherPlaceOfBirth = ?, fatherCountry = ?, fatherIdNumber= ?, motherSurname = ?, motherName= ?, motherDOB= ?, motherPlaceOfBirth = ?, motherCountry = ?, motherIdNumber = ?, WHERE idNumber = ?

        // console.log(body)
        connection.query("UPDATE members SET ? WHERE idNumber = ?",[req.body,req.params.id],(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
                res.send(err); 
            }
        })

        // console.log(`The body is ${body.name}`);
    })
    
});

// for updating the registration table approve field
app.put("/updateConfirmation/:id",(req,res)=>{

    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

        // const body = req.body;
        const {
            name,
            dateOfBirth,
            idNumber,
            placeOfBirth,
            fatherName,
            fatherSurname,
            fatherDOB,
            fatherPlaceOfBirth,
            fatherCountry,
            fatherIdNumber,
            motherSurname,
            motherName,
            motherDOB,
            motherPlaceOfBirth,
            motherCountry,
            motherIdNumber} = req.body;

            console.log("Printing the received data in updateMember")
            console.log(req.body);

        connection.query("UPDATE confirmation SET ? WHERE idNumber = ?",[req.body,req.params.id],(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
                res.send(err); 
            }
        })

        // console.log(`The body is ${body.name}`);
    })
    
});

// for updating the registration table approve field
app.put("/updateBaptism/:id",(req,res)=>{

    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

            console.log("Printing the received data in updateMember")
            console.log(req.body);

        connection.query("UPDATE baptism SET ? WHERE idNumber = ?",[req.body,req.params.id],(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
                res.send(err); 
            }
        })

        // console.log(`The body is ${body.name}`);
    })
    
});

// for updating the registration table approve field
app.put("/updateMarriage/:id",(req,res)=>{
    console.log('THE RECEIVED DATA')
    console.log(req.body);
    pool.getConnection((err,connection) =>{
        if(err) throw err
        console.log(`Connected as id  ${connection.threadId}`)

            console.log("Printing the received data in updateMember")
            console.log(req.body);

        connection.query("UPDATE marriage SET ? WHERE idNumber = ?",[req.body,req.params.id],(err,result)=>{
            connection.release()
            if(!err){
                res.send(result)
            }else{
                console.log(err)
                res.send(err); 
            }
        })

        // console.log(`The body is ${body.name}`);
    })   
});






// 
app.listen(3000,function() {
    console.log("Server started at port 3000")
})