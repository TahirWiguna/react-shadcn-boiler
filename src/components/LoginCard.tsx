import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/user/user.slice";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { AxiosError } from "axios";
import { LoginCredentials, UserResponse } from "@/types/user";

const defaultFields = {
    username: "",
    password: "",
};

export function LoginCard() {
    const dispatch = useDispatch();
    const [formFields, setFormFields] =
        useState<LoginCredentials>(defaultFields);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const login = async () => {
        try {
            await dispatch(loginUser(formFields)).unwrap();
            console.log("Login successful");
        } catch (error) {
            console.log("Login failed", error);
        }
    };

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle className="text-center">LOGIN</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Username/Email</Label>
                            <Input
                                id="username"
                                placeholder="Enter username or email"
                                onInput={onChangeHandler}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                onInput={onChangeHandler}
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button className="w-full" onClick={login}>
                    Sign In
                </Button>
            </CardFooter>
        </Card>
    );
}

export default LoginCard;
