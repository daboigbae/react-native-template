import React from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';

export const SettingsScreen: React.FC = () => {
  return (
    <ScrollView className='flex-1 bg-gray-50'>
      <View className='p-6'>
        {/* App Settings */}
        <View className='bg-white rounded-xl p-6 mb-6 shadow-sm'>
          <Text className='text-lg font-semibold text-gray-800 mb-4'>App Settings</Text>
          <View className='space-y-4'>
            <View className='flex-row justify-between items-center'>
              <View className='flex-row items-center'>
                <Icon name='notifications' size={20} color='#6b7280' />
                <Text className='ml-3 text-gray-700'>Push Notifications</Text>
              </View>
              <Switch value={true} />
            </View>
            <View className='flex-row justify-between items-center'>
              <View className='flex-row items-center'>
                <Icon name='dark-mode' size={20} color='#6b7280' />
                <Text className='ml-3 text-gray-700'>Dark Mode</Text>
              </View>
              <Switch value={false} />
            </View>
            <View className='flex-row justify-between items-center'>
              <View className='flex-row items-center'>
                <Icon name='location-on' size={20} color='#6b7280' />
                <Text className='ml-3 text-gray-700'>Location Services</Text>
              </View>
              <Switch value={true} />
            </View>
          </View>
        </View>

        {/* Account Settings */}
        <View className='bg-white rounded-xl p-6 mb-6 shadow-sm'>
          <Text className='text-lg font-semibold text-gray-800 mb-4'>Account</Text>
          <View className='space-y-3'>
            <TouchableOpacity className='flex-row items-center justify-between p-3'>
              <View className='flex-row items-center'>
                <Icon name='person' size={20} color='#6b7280' />
                <Text className='ml-3 text-gray-700'>Edit Profile</Text>
              </View>
              <Icon name='chevron-right' size={20} color='#9ca3af' />
            </TouchableOpacity>
            <TouchableOpacity className='flex-row items-center justify-between p-3'>
              <View className='flex-row items-center'>
                <Icon name='lock' size={20} color='#6b7280' />
                <Text className='ml-3 text-gray-700'>Change Password</Text>
              </View>
              <Icon name='chevron-right' size={20} color='#9ca3af' />
            </TouchableOpacity>
            <TouchableOpacity className='flex-row items-center justify-between p-3'>
              <View className='flex-row items-center'>
                <Icon name='email' size={20} color='#6b7280' />
                <Text className='ml-3 text-gray-700'>Email Settings</Text>
              </View>
              <Icon name='chevron-right' size={20} color='#9ca3af' />
            </TouchableOpacity>
          </View>
        </View>

        {/* Support */}
        <View className='bg-white rounded-xl p-6 mb-6 shadow-sm'>
          <Text className='text-lg font-semibold text-gray-800 mb-4'>Support</Text>
          <View className='space-y-3'>
            <TouchableOpacity className='flex-row items-center justify-between p-3'>
              <View className='flex-row items-center'>
                <Icon name='help' size={20} color='#6b7280' />
                <Text className='ml-3 text-gray-700'>Help Center</Text>
              </View>
              <Icon name='chevron-right' size={20} color='#9ca3af' />
            </TouchableOpacity>
            <TouchableOpacity className='flex-row items-center justify-between p-3'>
              <View className='flex-row items-center'>
                <Icon name='feedback' size={20} color='#6b7280' />
                <Text className='ml-3 text-gray-700'>Send Feedback</Text>
              </View>
              <Icon name='chevron-right' size={20} color='#9ca3af' />
            </TouchableOpacity>
            <TouchableOpacity className='flex-row items-center justify-between p-3'>
              <View className='flex-row items-center'>
                <Icon name='info' size={20} color='#6b7280' />
                <Text className='ml-3 text-gray-700'>About</Text>
              </View>
              <Icon name='chevron-right' size={20} color='#9ca3af' />
            </TouchableOpacity>
          </View>
        </View>

        {/* Danger Zone */}
        <View className='bg-white rounded-xl p-6 shadow-sm'>
          <Text className='text-lg font-semibold text-red-600 mb-4'>Danger Zone</Text>
          <TouchableOpacity className='flex-row items-center justify-between p-3 bg-red-50 rounded-lg'>
            <View className='flex-row items-center'>
              <Icon name='logout' size={20} color='#dc2626' />
              <Text className='ml-3 text-red-600 font-medium'>Sign Out</Text>
            </View>
            <Icon name='chevron-right' size={20} color='#dc2626' />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
