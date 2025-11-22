#!/usr/bin/env python3

"""
util_types.py --- Class and type definitions
"""

from enum import Enum

Hour = int
Minute = int

class Subject:
    name: str
    code: str

    def __init__(self):
        ...


class Day(Enum):
    SUNDAY = auto()
    MONDAY = auto()
    TUESDAY = auto()
    WEDNESDAY = auto()
    THURSDAY = auto()
    FRIDAY = auto()
    SATURDAY = auto()


class SectionType(Enum):
    LAB = auto()
    LECTURE = auto()
    TUTORIAL = auto()


class ScheduleItem:
    day: Day
    hour: tuple[Hour, Minute]
    duration: Minute = 60  # no. in minutes
    name: str

    def __init__(self):
        ...


class UniSection(ScheduleItem):
    type: SectionType
    subject: Subject

    def __init__(self):
        ...


class Schedule:
    items: list[ScheduleItem]

    def __init__(self):
        ...

    def __getitem__(self, key) -> ScheduleItem:
        raise IndexError

    def __setitem__(self, key, value):
        ...

    def __delitem__(self, key, value):
        ...
