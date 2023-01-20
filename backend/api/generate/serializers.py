import re
from rest_framework.serializers import Serializer
from rest_framework.serializers import ModelSerializer
from rest_framework.fields import CharField, ListField, IntegerField


class SmilesInputSerializer(Serializer):
    smiles = CharField(required=True)
    rGroup = ListField(required=True)
    rGroup_Labels = ListField(required=True)
    numGen = IntegerField(required=True)
    numMutations = IntegerField(required=True)
    numParents = IntegerField(required=True)
