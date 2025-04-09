import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';

interface DatePickerModalProps {
    open?: boolean;
    startDate: string;
    selectedDate: string;
    onClose: () => void;
    onChangeStartDate: (date: string) => void;
}

const error = console.error;

console.error = (...args)=>{
    if (/defaultProps/.test(args[0])) return;
    error(...args);
}

const DatePickerModal : FC<DatePickerModalProps> = ({
    open,
    startDate,
    selectedDate,
    onClose,
    onChangeStartDate,
}) => {

    const [selectedStartDate, setSelectedStartDate] = useState(selectedDate);

    const handleDateChange = (date: string) => {
        onChangeStartDate(date);
        setSelectedStartDate(date);
    };

    const handleOnPressStartDate = () => {
        onClose();
    };

    const modalVisible = open

  return (
    <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <DatePicker 
                    mode='calendar'
                    minimumDate={startDate}
                    selected={selectedStartDate}
                    onDateChange={handleDateChange}
                    onSelectedChange={(date)=>setSelectedStartDate(date)}
                    options={{
                        backgroundColor: '#fff',
                        textHeaderColor: 'black',
                        textDefaultColor: 'black',
                        selectedTextColor: 'black',
                        mainColor: '#F4CE14',
                        textSecondaryColor: 'black',
                        borderColor: '#fff'
                    }}
                />
                <TouchableOpacity onPress={handleOnPressStartDate}>
                    <Text style={{ color: 'black' }}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalView: {
        margin: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 25,
        width: "90%",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }

})

export default DatePickerModal