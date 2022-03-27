import React, { useState } from "react";
import { Form, Input, InputWrapper, Label, Submit, Wrapper } from "./styled";
import { UserIcon } from "./UserIcon/styled";
import { PadlockIcon } from "./PadlockIcon/styled";


export default () => {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
    }

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