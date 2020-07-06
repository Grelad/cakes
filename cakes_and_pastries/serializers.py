from rest_framework import serializers

from .models import SweetCard


class SweetCardSerializer(serializers.ModelSerializer):

    class Meta:
        model = SweetCard
        fields = ('pk', 'name', 'description', 'image', 'price')
