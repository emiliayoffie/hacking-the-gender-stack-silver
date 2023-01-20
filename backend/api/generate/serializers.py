from rest_framework.serializers import Serializer
from rest_framework.serializers import ModelSerializer
from rest_framework.fields import CharField


class SmilesInputSerializer(Serializer):
    smiles = CharField(required=True)
