import { View, Text, StyleSheet } from 'react-native'

function MealDetail({duration, complexity, affordability}){
    return(

        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
    )

}

export default MealDetail

const styles = StyleSheet.create({
    details: {
        flexDiretion: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem:{
        marginHorizontal: 4,
        fontSize: 12
    }
})