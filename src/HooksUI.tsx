import { useForm } from "react-hook-form";

interface IForm{
    name: string;
    email: string;
    password: string;
}
const myCallBack = (data: IForm) => {
    //sending data to backend
    console.log("myCallback invoked " + data.name + data.email + data.password);
}

export default function HooksUI() {
    //object destructuring since only specific objects are required
    const {register, handleSubmit, formState:{errors}} = useForm<IForm>()
    //binding with the input attributes of the form
    //reset funcitonality
    //form submit
    //form validation
    return(
    <form onSubmit={handleSubmit(myCallBack)}>
        <input type = "text" placeholder="name" {...register("name", {
         required:true, 
         minLength:{value:4, message: "name should have min length 4"},
         maxLength:{value:8, message: "name should have min length 8"}
        })}/>
        {errors.name?.message && <div>{errors.name.message}</div>}
        <input type="email" placeholder="email" {...register("email", {
            required:true,
            pattern: {value: /\w+@\w+\.\w+/, message:"email regex not matched"}
        })}/>
        {errors.name?.message && <div>{errors.email?.message}</div>}
        <input type ="password" placeholder="password" {...register("password")}/>  
        <button type="reset">reset</button>
        <button type="submit">submit</button>
    </form>  
    )
}
