import sessions from "../db/sessions";

const check_token = async function (req, res, next) {
  
  try {
  
    const valid_token = await sessions.findOne({
      where: { token: req.header('Authorization') },
      raw: true
    });

    if(!valid_token){
      throw new Error('Please log in first')
    }
    next()
  } catch (error) {
    return res.status(201).json({ error: error.message });
  }
 
}



export default check_token;