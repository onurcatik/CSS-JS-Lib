```plantuml
@startuml

class document {
    getElementById(id: string): Element
}

class Element {
    value: string
    textContent: string
    addEventListener(event: string, callback: Function): void
}

class console {
    static log(message: string): void
}

class validateForm {
    +validateForm(): void
}

class isValidEmail {
    +isValidEmail(email: string): boolean
}

document --> Element
Element --> console

validateForm --> document
validateForm --> isValidEmail

@enduml
