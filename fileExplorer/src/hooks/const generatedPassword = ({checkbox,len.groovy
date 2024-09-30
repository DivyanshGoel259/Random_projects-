const generatedPassword = ({checkbox,length})=>{
        let charset = '';
        let  generatedPassword = "";

        const selectedOption = checkbox.filter((check)=> check.state == true)
        
        if(selectedOption.length==0){
            setErrorMessage("Provided Wrong Inputs")
        }

        selectedOption.forEach((option) => {
            switch(option.title){
                case "Include Uppercase Letters":{
                    charset+= "ABCDEFGHIJKLMNOPUVWXYZ"
                    break
                }
                case "Include Lowercase Letters":{
                    charset+= "abcdefghijklmnopuvwxyz"
                    break
                }
                case "Include Numbers":{
                    charset+= "0123456789"
                    break
                }
                case "Include Symbols":{
                    charset+= "!@#$%^&*()"
                    break
                }

                for(let i =0;i<length;i++){
                    generatedPassword = charset.charAt(Math.floor(Math.random() * charset.length))
                }
                setPassword(generatedPassword)
            }
        });


    }

