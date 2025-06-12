import { CreateGuesser, EditGuesser, ListGuesser, ShowGuesser } from "ra-supabase";
import { Resource } from "react-admin";

export function ResourceGuesser({ name }: { name:string }){
    return <Resource name={name} list={ListGuesser} edit={EditGuesser} create={CreateGuesser} show={ShowGuesser} />
}