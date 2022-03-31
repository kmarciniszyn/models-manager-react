import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, InputWrapper, Label, Submit, Wrapper } from "./styled";
import { UserIcon } from "./UserIcon/styled";
import { PadlockIcon } from "./PadlockIcon/styled";
import { toModels } from "../../../../routes";
import { useFakeAuth } from "../../../../fakeAuth";

export default () => {
    const history = useHistory();
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const auth = useFakeAuth(); // fake auth

    const onFormSubmit = async (event) => {
        event.preventDefault();

        // fake auth for demo
        const { isLogin } = await auth.login(identifier, password);

        if (isLogin) {
            history.replace(toModels());
        }else{
            alert("login error");
        }
    };

    return (
        <Form
            onSubmit={event => onFormSubmit(event)}
        >
            <Wrapper>
                <UserIcon />
                <InputWrapper>
                    <Input
                        value={identifier}
                        onChange={({ target }) => setIdentifier(target.value)}
                        type="text"
                        placeholder="identifier"
                        required
                    />
                    <Label>identifier</Label>
                </InputWrapper>
            </Wrapper>

            <Wrapper>
                <PadlockIcon />
                <InputWrapper>
                    <Input
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        type="password"
                        placeholder="password"
                        required
                    />
                    <Label>password</Label>
                </InputWrapper>
            </Wrapper>

            <Submit
                type="submit"
                value="submit"
            />
        </Form>
    );
}