import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: Arial, Helvetica, sans-serif;

}


.login-container{
    
    height:92vh;
    width:55%;
    box-shadow: 0 8px 30px rgb(0,0,0,0.12);
    h1{
        text-align:center;
        font-weight:900;
        font-size: 1.4rem;
        
    }
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-left:5rem;

    padding-right:5rem;
    padding-top:8rem;
    padding-bottom:8rem;
    
    @media (max-width: 1024px) {
    width:95%;
  }

}

.form-container{
    width:100%;
    height:100%;
    
   
    label{
        font-size: .7rem;
        
        

    }

  
 
    

    .form-field{
    display:flex;
    justify-content:space-between;

   

    p{
        display:inline ;
        margin-bottom: 15px;

    }
}


    input[type='text']{
        padding:.5rem .5rem;
        width:100%;
        border:1px solid lightgray;
        border-radius: 5px;
        font-size: .6rem;
        margin-bottom: 1rem;
        margin-top: .5rem;
    }
    input[type='password']{
        padding:.5rem .5rem;
        width:100%;
        border:1px solid lightgray;
        border-radius: 5px;
        font-size: .6rem;
        margin-bottom: 0;
        margin-top: .5rem;


    }
    input[type="checkbox"]{
        margin-right: 5px;
        margin-top: 12px;
    }
  

}
.span{
    padding-bottom: 5px;
}



button[type="button"]{
    background-color: white;
    border: none;
    color:#ec8517;
    font-size: .7rem;
}
a{
    text-decoration: none;
    color:#ec8517;
}
button[type="submit"]{
   background-color: #2d75a7;
   color:white;
   width:80%;
   margin-left:10%;
   margin-top: 2rem;
   padding: .5rem .5rem;
   border:2px solid #2d75a7;
   border-radius: 5px;
   /* margin-right:50%; */



}

`;
