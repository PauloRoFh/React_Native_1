import {Text, View, TextInput, TouchableOpacity} from "react-native";
import {styles} from "./stlyes";
import { Participant } from "../../components/Participant";

export default function Home(){

    function handleParticipantAdd() {
        //console.log("Você clicou no botão de Adicionar!");
    }

    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>
                React Native
            </Text>

            <Text style={styles.dataName}>
                Sexta, 25 de Agosto de 2023.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participande"
                    placeholderTextColor="#6B6B6B"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <Participant />
        </View>
    )
}