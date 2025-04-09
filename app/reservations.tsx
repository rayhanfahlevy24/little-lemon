import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal, FlatList, Alert } from "react-native";
import { Feather, AntDesign } from '@expo/vector-icons';
import { getFormatedDate } from "react-native-modern-datepicker";
import DatePickerModal from "@/components/DatePickerModal";
import { router, useRouter } from 'expo-router';

const width = Dimensions.get("window").width

export default function Reservations() {

  const router = useRouter();

  const handlePress = () => {

    if (!startedDate || !selectedRoom || !selectedVisitors) {
      alert("Please fill in all fields before proceeding.");
      return;
    }

    router.push({
      pathname: '/reservationsdetail',
      params: {
        date: formatDateToLong(startedDate),
        room: `${selectedRoom} Room`,
        visitors: `${selectedVisitors} Visitors`,
      },
    });
  };

  const today = new Date();

  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);

  const startDate = getFormatedDate(
    new Date(today.setDate(today.getDate()+1)),
    "YYYY/MM/DD"
  );

  const [startedDate, setStartedDate] = useState(getFormatedDate(today, "YYYY/MM/DD"));

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [selectedVisitors, setSelectedVisitors] = useState<number | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const rooms = ['Indoor', 'Semi Outdoor', 'Outdoor'];
  const visitors = Array.from({ length: 10 }, (_, i) => i + 1);

  const formatDateToLong = (inputDate: string): string => {
    const [year, month, day] = inputDate.split("/").map(Number);
    const dateObj = new Date(year, month - 1, day);
    return dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };  

  return (
    <View style={styles.container}>
      {/* <StatusBar hidden /> */}
      <Text style={styles.textBooking}>Choose Your Booking Date!</Text>
      <View style={{ width: width - 20 }}>
        <TouchableOpacity onPress={handleOnPressStartDate} style={styles.inputBtn}>
          <Text style={{ fontSize: 24, color: '#000000', fontFamily: 'MarkaziMedium', marginLeft: 5}}>
          {startedDate}
          </Text>
          <Feather name="calendar" size={24} color='#A1A1A1' />
        </TouchableOpacity>
      </View>
      <DatePickerModal 
        open={openStartDatePicker}
        startDate={startDate}
        selectedDate={startedDate}
        onClose={()=>setOpenStartDatePicker(false)}
        onChangeStartDate={(date)=>setStartedDate(date)}
      />
      <Text style={styles.textRoom}>Select the room</Text>
      {rooms.map((room, index) => (
    <View key={room}>
      <TouchableOpacity
        style={styles.radioRow}
        onPress={() => setSelectedRoom(room)}
      >
        <Text style={styles.radioLabel}>{room}</Text>
        <View
          style={[
            styles.radioCircle,
            selectedRoom === room && styles.radioCircleSelectedBorder,
          ]}
        >
          {selectedRoom === room && <View style={styles.radioInner} />}
        </View>
      </TouchableOpacity>
      {/* Garis bawah */}
      {index !== rooms.length - 1 && <View style={styles.divider} />}
    </View>
  ))}
      <Text style={styles.textVisitors}>Number of visitors</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setShowDropdown(true)}
      >
        <Text style={styles.dropdownText}>
          {selectedVisitors ? selectedVisitors : 'Select'}
        </Text>
        <AntDesign name="down" size={16} color="#A1A1A1" />
      </TouchableOpacity>

      <Modal visible={showDropdown} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setShowDropdown(false)}
        >
          <View style={styles.modalDropdown}>
            <FlatList
              data={visitors}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedVisitors(item);
                    setShowDropdown(false);
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity 
      onPress={handlePress}
      style={styles.bookingButton}>
        <Text style={styles.bookingText}>Booking</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  textBooking: {
    fontFamily: 'MarkaziSemiBold',
    fontSize: 25,
    marginHorizontal: 20,
    marginTop: 15,
  },
  inputBtn: {
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#FAFAFA',
    height: 50,
    paddingLeft: 8,
    fontSize: 18,
    backgroundColor: '#EDEFEE',
    justifyContent: 'space-between',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
  },
  textRoom: {
    fontFamily: 'MarkaziSemiBold',
    fontSize: 25,
    marginHorizontal: 20,
    marginTop: 15,
  },
  radioRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 20,
  }, 
  radioLabel: {
    fontSize: 22,
    color: '#495E57', 
    fontFamily: 'MarkaziMedium',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#495E57',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  radioCircleSelectedBorder: {
    borderColor: '#495E57',
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#495E57',
  },
  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginHorizontal: 20,
  },
  textVisitors: {
    fontFamily: 'MarkaziSemiBold',
    fontSize: 25,
    marginHorizontal: 20,
    marginTop: 15,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: 100,
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: '#EDEFEE'
  },
  dropdownText: {
    fontSize: 22,
    fontFamily: 'MarkaziMedium',
    color: '#000000'
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalDropdown: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    elevation: 5,
    width: 120,
  },
  dropdownItem: {
    paddingVertical: 8,
  },
  bookingButton: {
    backgroundColor: '#F4CE14',
    borderRadius: 15,
    paddingVertical: 5,
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 20,
  },
  bookingText: {
    fontFamily: 'MarkaziSemiBold',
    color: '#000000',
    fontSize: 25,
  },
})

