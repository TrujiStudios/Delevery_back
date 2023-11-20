


class authService{

    async login(req,res){

    }

    async signup(req,res){

        console.log(req.body);

        return {
            message: 'User created successfully',
            req: req.body
           
        }

    }

}
module.exports = authService;