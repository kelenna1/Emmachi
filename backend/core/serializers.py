from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    price = serializers.FloatField()  # ✅ Ensures it is sent as a number, not string

    class Meta:
        model = Product
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at']

    def validate(self, data):
        if data['quantity_available'] < 0:
            raise serializers.ValidationError("Quantity available cannot be negative.")
        if data['price'] < 0:
            raise serializers.ValidationError("Price cannot be negative.")
        return data


class ProductAdminSerializer(serializers.ModelSerializer):
    price = serializers.FloatField()

    class Meta:
        model = Product
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at']

    def validate(self, data):
        if data['quantity_available'] < 0:
            raise serializers.ValidationError("Quantity available cannot be negative.")
        if data['price'] < 0:
            raise serializers.ValidationError("Price cannot be negative.")
        return data
