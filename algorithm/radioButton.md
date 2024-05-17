```plantuml
@startuml

class document {
    getElementsByName(name: string): Element[]
}

class Element {
    checked: boolean
    value: string
}

class console {
    static log(message: string): void
}

class selectRadioButton {
    +selectRadioButton(): void
}

document --> Element
Element --> console

selectRadioButton --> document

@enduml
