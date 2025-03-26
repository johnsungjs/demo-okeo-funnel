import { Button } from "@mantine/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import { setShell } from "../../../reducers/appShellSlice";

function HomeScreen() {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setShell({
            showHeader: false
        }))
    }, []);



    return (
        <>
            <Button onClick={() => {
                navigate("/dashboard");
            }}>To Dashboard</Button>
        </>
    )
}

export default HomeScreen