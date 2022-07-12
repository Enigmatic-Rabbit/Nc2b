import Telephone from './subcomponentsC/TeleContact'
import Email from './subcomponentsC/EmailContacts'
import Social from './subcomponentsC/SocailContacts'
export default function ContactsPage(){
    return(
        <div className="ContactsContent">
            <Telephone/>
            <Email/>
            <Social/>
        </div>
    )
}