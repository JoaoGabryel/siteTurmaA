import Link from "next/link"
import { LeftContainer, NavbarContainer, NavbarInnerContainer, RightContainer } from "./styles"

export const Menu = () => {
    return (
        <NavbarContainer>
            <NavbarInnerContainer>
                <LeftContainer>
                    <Link href={"/voluntarios"}>Testes</Link>
                </LeftContainer>
                <RightContainer></RightContainer>
            </NavbarInnerContainer>
        </NavbarContainer>
        
    )
}