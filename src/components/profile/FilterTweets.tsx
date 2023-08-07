import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'

interface Filter {
    name: string;
    status: boolean;
    text: string;
    url: string;
    available?: boolean;
}

interface Props {
    filters: Array<Filter>;
    getTweets?: ({url,id}:{url?: string, id?: string}) => void;
    getUsers?: (url: string) => void;
    setPeople?: (value: boolean) => void; 
}

const FilterTweets = ({filters,getTweets = () => {}, getUsers = () => {},setPeople = () => {}}: Props) => {

    const [values, setValues] = useState(filters)

    const handleSelectOptions = (value: Filter) => {
 
        setValues(values.map(f => {
            if (f.name === value.name) {
                return {
                    ...value,
                    status: true
                }
            }else{
                return {
                    ...f,
                    status:false
                }
             }
        }));

        if (!value.available) {
            setPeople(true)
            getUsers(value.url)
            return;
        }
        
        if (value.url.trim().length !== 0) {
            setPeople(false)
            getTweets({url: value.url})
        }
        
    }

  return (
    <View
        style={
            styles.container
        }
    >
        {/* PONER FILTRO DE TWEETS */}
        <View style={styles.containerFilter}>
            {
                values.map(filter => (
                    <TouchableOpacity 
                        key={filter.name}
                        onPress={()=>handleSelectOptions(filter)}
                        style={styles.itemFilter}>
                        {
                            filter.status
                            &&
                            <View style={styles.lineFilter}></View>
                        }
                        
                        <Text style={filter.status ? {
                            ...styles.textFilter,
                            ...styles.activeText
                        }
                            :styles.textFilter}>
                            {filter.text}
                        </Text>
                    </TouchableOpacity>
                ))
            }

        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10
    },
    containerFilter: {
        backgroundColor: 'white', 
        borderRadius: 10,
        paddingVertical: 25,
        width: '100%',
        flexDirection: 'column',
        gap: 15,
        marginBottom: 20
    },
    itemFilter: { 
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    lineFilter: {
        position: 'absolute',
        width: 5,
        height: 35,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        backgroundColor: '#2F80ED',
    },
    textFilter: {
        marginLeft: 20,
        color: '#828282',
        fontSize: 16,
        fontWeight: '400'
    },
    activeText: {
        color: '#2F80ED',
        fontWeight: '500'
    }

})

export default FilterTweets